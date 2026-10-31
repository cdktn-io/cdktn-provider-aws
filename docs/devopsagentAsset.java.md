# `devopsagentAsset` Submodule <a name="`devopsagentAsset` Submodule" id="@cdktn/provider-aws.devopsagentAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAsset <a name="DevopsagentAsset" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset aws_devopsagent_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAsset;

DevopsagentAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentSpaceId(java.lang.String)
    .assetType(java.lang.String)
//  .content(IResolvable|java.util.List<DevopsagentAssetContent>)
//  .metadata(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.content">content</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>></code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON document describing the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.agentSpaceId"></a>

- *Type:* java.lang.String

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.content"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

JSON document describing the asset.

Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent"></a>

```java
public void putContent(IResolvable|java.util.List<DevopsagentAssetContent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>>

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent"></a>

```java
public void resetContent()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAsset;

DevopsagentAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAsset;

DevopsagentAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAsset;

DevopsagentAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAsset;

DevopsagentAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsagentAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsagentAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsagentAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content">content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual">metadataActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput">agentSpaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content"></a>

```java
public DevopsagentAssetContentList getContent();
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `metadataActual`<sup>Required</sup> <a name="metadataActual" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual"></a>

```java
public java.lang.String getMetadataActual();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `agentSpaceIdInput`<sup>Optional</sup> <a name="agentSpaceIdInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput"></a>

```java
public java.lang.String getAgentSpaceIdInput();
```

- *Type:* java.lang.String

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContent> getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetConfig <a name="DevopsagentAssetConfig" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetConfig;

DevopsagentAssetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentSpaceId(java.lang.String)
    .assetType(java.lang.String)
//  .content(IResolvable|java.util.List<DevopsagentAssetContent>)
//  .metadata(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content">content</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>></code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON document describing the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContent> getContent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

JSON document describing the asset.

Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}

---

### DevopsagentAssetContent <a name="DevopsagentAssetContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContent;

DevopsagentAssetContent.builder()
//  .file(IResolvable|java.util.List<DevopsagentAssetContentFile>)
//  .sourceUrl(IResolvable|java.util.List<DevopsagentAssetContentSourceUrl>)
//  .zip(IResolvable|java.util.List<DevopsagentAssetContentZip>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file">file</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>></code> | file block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl">sourceUrl</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>></code> | source_url block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip">zip</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>></code> | zip block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFile> getFile();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#file DevopsagentAsset#file}

---

##### `sourceUrl`<sup>Optional</sup> <a name="sourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentSourceUrl> getSourceUrl();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>>

source_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#source_url DevopsagentAsset#source_url}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentZip> getZip();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip DevopsagentAsset#zip}

---

### DevopsagentAssetContentFile <a name="DevopsagentAssetContentFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFile;

DevopsagentAssetContentFile.builder()
    .path(java.lang.String)
//  .body(IResolvable|java.util.List<DevopsagentAssetContentFileBody>)
//  .metadata(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path">path</a></code> | <code>java.lang.String</code> | Path of the file within the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body">body</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>></code> | body block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON metadata for the file. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the file within the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#path DevopsagentAsset#path}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFileBody> getBody();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#body DevopsagentAsset#body}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

JSON metadata for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

### DevopsagentAssetContentFileBody <a name="DevopsagentAssetContentFileBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFileBody;

DevopsagentAssetContentFileBody.builder()
//  .bytes(java.lang.String)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes">bytes</a></code> | <code>java.lang.String</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text">text</a></code> | <code>java.lang.String</code> | Text file content. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#bytes DevopsagentAsset#bytes}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#text DevopsagentAsset#text}

---

### DevopsagentAssetContentSourceUrl <a name="DevopsagentAssetContentSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentSourceUrl;

DevopsagentAssetContentSourceUrl.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url">url</a></code> | <code>java.lang.String</code> | Source URL from which to import asset content. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Source URL from which to import asset content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#url DevopsagentAsset#url}

---

### DevopsagentAssetContentZip <a name="DevopsagentAssetContentZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentZip;

DevopsagentAssetContentZip.builder()
    .zipFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile">zipFile</a></code> | <code>java.lang.String</code> | Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file. |

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile"></a>

```java
public java.lang.String getZipFile();
```

- *Type:* java.lang.String

Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip_file DevopsagentAsset#zip_file}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetContentFileBodyList <a name="DevopsagentAssetContentFileBodyList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFileBodyList;

new DevopsagentAssetContentFileBodyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get"></a>

```java
public DevopsagentAssetContentFileBodyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFileBody> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>>

---


### DevopsagentAssetContentFileBodyOutputReference <a name="DevopsagentAssetContentFileBodyOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFileBodyOutputReference;

new DevopsagentAssetContentFileBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes">resetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytes` <a name="resetBytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes"></a>

```java
public void resetBytes()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput">bytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes">bytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesInput`<sup>Optional</sup> <a name="bytesInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput"></a>

```java
public java.lang.String getBytesInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssetContentFileBody getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>

---


### DevopsagentAssetContentFileList <a name="DevopsagentAssetContentFileList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFileList;

new DevopsagentAssetContentFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get"></a>

```java
public DevopsagentAssetContentFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFile> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>>

---


### DevopsagentAssetContentFileOutputReference <a name="DevopsagentAssetContentFileOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentFileOutputReference;

new DevopsagentAssetContentFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody"></a>

```java
public void putBody(IResolvable|java.util.List<DevopsagentAssetContentFileBody> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput">bodyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body"></a>

```java
public DevopsagentAssetContentFileBodyList getBody();
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFileBody> getBodyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssetContentFile getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>

---


### DevopsagentAssetContentList <a name="DevopsagentAssetContentList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentList;

new DevopsagentAssetContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get"></a>

```java
public DevopsagentAssetContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContent> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>>

---


### DevopsagentAssetContentOutputReference <a name="DevopsagentAssetContentOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentOutputReference;

new DevopsagentAssetContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl">putSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip">putZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl">resetSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip">resetZip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile"></a>

```java
public void putFile(IResolvable|java.util.List<DevopsagentAssetContentFile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>>

---

##### `putSourceUrl` <a name="putSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl"></a>

```java
public void putSourceUrl(IResolvable|java.util.List<DevopsagentAssetContentSourceUrl> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>>

---

##### `putZip` <a name="putZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip"></a>

```java
public void putZip(IResolvable|java.util.List<DevopsagentAssetContentZip> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>>

---

##### `resetFile` <a name="resetFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetSourceUrl` <a name="resetSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl"></a>

```java
public void resetSourceUrl()
```

##### `resetZip` <a name="resetZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip"></a>

```java
public void resetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl">sourceUrl</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput">fileInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput">zipInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file"></a>

```java
public DevopsagentAssetContentFileList getFile();
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a>

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl"></a>

```java
public DevopsagentAssetContentSourceUrlList getSourceUrl();
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip"></a>

```java
public DevopsagentAssetContentZipList getZip();
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentFile> getFileInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>>

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentSourceUrl> getSourceUrlInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>>

---

##### `zipInput`<sup>Optional</sup> <a name="zipInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentZip> getZipInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssetContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>

---


### DevopsagentAssetContentSourceUrlList <a name="DevopsagentAssetContentSourceUrlList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentSourceUrlList;

new DevopsagentAssetContentSourceUrlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get"></a>

```java
public DevopsagentAssetContentSourceUrlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentSourceUrl> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>>

---


### DevopsagentAssetContentSourceUrlOutputReference <a name="DevopsagentAssetContentSourceUrlOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentSourceUrlOutputReference;

new DevopsagentAssetContentSourceUrlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssetContentSourceUrl getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>

---


### DevopsagentAssetContentZipList <a name="DevopsagentAssetContentZipList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentZipList;

new DevopsagentAssetContentZipList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get"></a>

```java
public DevopsagentAssetContentZipOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssetContentZip> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>>

---


### DevopsagentAssetContentZipOutputReference <a name="DevopsagentAssetContentZipOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.devopsagent_asset.DevopsagentAssetContentZipOutputReference;

new DevopsagentAssetContentZipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput">zipFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile">zipFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `zipFileInput`<sup>Optional</sup> <a name="zipFileInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput"></a>

```java
public java.lang.String getZipFileInput();
```

- *Type:* java.lang.String

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile"></a>

```java
public java.lang.String getZipFile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssetContentZip getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>

---



