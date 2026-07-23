# `chimeVoiceConnectorTermination` Submodule <a name="`chimeVoiceConnectorTermination` Submodule" id="@cdktn/provider-aws.chimeVoiceConnectorTermination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTermination <a name="ChimeVoiceConnectorTermination" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTermination;

ChimeVoiceConnectorTermination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callingRegions(java.util.List<java.lang.String>)
    .cidrAllowList(java.util.List<java.lang.String>)
    .voiceConnectorId(java.lang.String)
//  .cpsLimit(java.lang.Number)
//  .defaultPhoneNumber(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.callingRegions">callingRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cidrAllowList">cidrAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cpsLimit">cpsLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.defaultPhoneNumber">defaultPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callingRegions`<sup>Required</sup> <a name="callingRegions" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.callingRegions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `cidrAllowList`<sup>Required</sup> <a name="cidrAllowList" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cidrAllowList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.voiceConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `cpsLimit`<sup>Optional</sup> <a name="cpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.cpsLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `defaultPhoneNumber`<sup>Optional</sup> <a name="defaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.defaultPhoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#region ChimeVoiceConnectorTermination#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit">resetCpsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber">resetDefaultPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCpsLimit` <a name="resetCpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit"></a>

```java
public void resetCpsLimit()
```

##### `resetDefaultPhoneNumber` <a name="resetDefaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber"></a>

```java
public void resetDefaultPhoneNumber()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeVoiceConnectorTermination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTermination;

ChimeVoiceConnectorTermination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTermination;

ChimeVoiceConnectorTermination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTermination;

ChimeVoiceConnectorTermination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTermination;

ChimeVoiceConnectorTermination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeVoiceConnectorTermination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeVoiceConnectorTermination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeVoiceConnectorTermination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeVoiceConnectorTermination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorTermination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput">callingRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput">cidrAllowListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput">cpsLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput">defaultPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions">callingRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList">cidrAllowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit">cpsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber">defaultPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callingRegionsInput`<sup>Optional</sup> <a name="callingRegionsInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput"></a>

```java
public java.util.List<java.lang.String> getCallingRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrAllowListInput`<sup>Optional</sup> <a name="cidrAllowListInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput"></a>

```java
public java.util.List<java.lang.String> getCidrAllowListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpsLimitInput`<sup>Optional</sup> <a name="cpsLimitInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput"></a>

```java
public java.lang.Number getCpsLimitInput();
```

- *Type:* java.lang.Number

---

##### `defaultPhoneNumberInput`<sup>Optional</sup> <a name="defaultPhoneNumberInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput"></a>

```java
public java.lang.String getDefaultPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput"></a>

```java
public java.lang.String getVoiceConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `callingRegions`<sup>Required</sup> <a name="callingRegions" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions"></a>

```java
public java.util.List<java.lang.String> getCallingRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrAllowList`<sup>Required</sup> <a name="cidrAllowList" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList"></a>

```java
public java.util.List<java.lang.String> getCidrAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpsLimit`<sup>Required</sup> <a name="cpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit"></a>

```java
public java.lang.Number getCpsLimit();
```

- *Type:* java.lang.Number

---

##### `defaultPhoneNumber`<sup>Required</sup> <a name="defaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber"></a>

```java
public java.lang.String getDefaultPhoneNumber();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationConfig <a name="ChimeVoiceConnectorTerminationConfig" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.chime_voice_connector_termination.ChimeVoiceConnectorTerminationConfig;

ChimeVoiceConnectorTerminationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callingRegions(java.util.List<java.lang.String>)
    .cidrAllowList(java.util.List<java.lang.String>)
    .voiceConnectorId(java.lang.String)
//  .cpsLimit(java.lang.Number)
//  .defaultPhoneNumber(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions">callingRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList">cidrAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit">cpsLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber">defaultPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callingRegions`<sup>Required</sup> <a name="callingRegions" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions"></a>

```java
public java.util.List<java.lang.String> getCallingRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `cidrAllowList`<sup>Required</sup> <a name="cidrAllowList" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList"></a>

```java
public java.util.List<java.lang.String> getCidrAllowList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `cpsLimit`<sup>Optional</sup> <a name="cpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit"></a>

```java
public java.lang.Number getCpsLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `defaultPhoneNumber`<sup>Optional</sup> <a name="defaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber"></a>

```java
public java.lang.String getDefaultPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/chime_voice_connector_termination#region ChimeVoiceConnectorTermination#region}

---



