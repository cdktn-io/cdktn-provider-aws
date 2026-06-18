# `bedrockagentcoreMemory` Submodule <a name="`bedrockagentcoreMemory` Submodule" id="@cdktn/provider-aws.bedrockagentcoreMemory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreMemory <a name="BedrockagentcoreMemory" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory aws_bedrockagentcore_memory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemory(Construct Scope, string Id, BedrockagentcoreMemoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig">BedrockagentcoreMemoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig">BedrockagentcoreMemoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey">PutIndexedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources">PutStreamDeliveryResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetIndexedKey">ResetIndexedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn">ResetMemoryExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetStreamDeliveryResources">ResetStreamDeliveryResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIndexedKey` <a name="PutIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey"></a>

```csharp
private void PutIndexedKey(IResolvable|BedrockagentcoreMemoryIndexedKey[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]

---

##### `PutStreamDeliveryResources` <a name="PutStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources"></a>

```csharp
private void PutStreamDeliveryResources(IResolvable|BedrockagentcoreMemoryStreamDeliveryResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentcoreMemoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetIndexedKey` <a name="ResetIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetIndexedKey"></a>

```csharp
private void ResetIndexedKey()
```

##### `ResetMemoryExecutionRoleArn` <a name="ResetMemoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn"></a>

```csharp
private void ResetMemoryExecutionRoleArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStreamDeliveryResources` <a name="ResetStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetStreamDeliveryResources"></a>

```csharp
private void ResetStreamDeliveryResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreMemory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreMemory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreMemory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreMemory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreMemory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreMemory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreMemory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKey">IndexedKey</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList">BedrockagentcoreMemoryIndexedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResources">StreamDeliveryResources</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList">BedrockagentcoreMemoryStreamDeliveryResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput">EventExpiryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKeyInput">IndexedKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput">MemoryExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResourcesInput">StreamDeliveryResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration">EventExpiryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn">MemoryExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexedKey`<sup>Required</sup> <a name="IndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKey"></a>

```csharp
public BedrockagentcoreMemoryIndexedKeyList IndexedKey { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList">BedrockagentcoreMemoryIndexedKeyList</a>

---

##### `StreamDeliveryResources`<sup>Required</sup> <a name="StreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResources"></a>

```csharp
public BedrockagentcoreMemoryStreamDeliveryResourcesList StreamDeliveryResources { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList">BedrockagentcoreMemoryStreamDeliveryResourcesList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts"></a>

```csharp
public BedrockagentcoreMemoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `EventExpiryDurationInput`<sup>Optional</sup> <a name="EventExpiryDurationInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput"></a>

```csharp
public double EventExpiryDurationInput { get; }
```

- *Type:* double

---

##### `IndexedKeyInput`<sup>Optional</sup> <a name="IndexedKeyInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKeyInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryIndexedKey[] IndexedKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]

---

##### `MemoryExecutionRoleArnInput`<sup>Optional</sup> <a name="MemoryExecutionRoleArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput"></a>

```csharp
public string MemoryExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StreamDeliveryResourcesInput`<sup>Optional</sup> <a name="StreamDeliveryResourcesInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResourcesInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResources[] StreamDeliveryResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `EventExpiryDuration`<sup>Required</sup> <a name="EventExpiryDuration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration"></a>

```csharp
public double EventExpiryDuration { get; }
```

- *Type:* double

---

##### `MemoryExecutionRoleArn`<sup>Required</sup> <a name="MemoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn"></a>

```csharp
public string MemoryExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreMemoryConfig <a name="BedrockagentcoreMemoryConfig" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double EventExpiryDuration,
    string Name,
    string Description = null,
    string EncryptionKeyArn = null,
    IResolvable|BedrockagentcoreMemoryIndexedKey[] IndexedKey = null,
    string MemoryExecutionRoleArn = null,
    string Region = null,
    IResolvable|BedrockagentcoreMemoryStreamDeliveryResources[] StreamDeliveryResources = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockagentcoreMemoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration">EventExpiryDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.indexedKey">IndexedKey</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]</code> | indexed_key block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn">MemoryExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.streamDeliveryResources">StreamDeliveryResources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]</code> | stream_delivery_resources block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventExpiryDuration`<sup>Required</sup> <a name="EventExpiryDuration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration"></a>

```csharp
public double EventExpiryDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}.

---

##### `IndexedKey`<sup>Optional</sup> <a name="IndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.indexedKey"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryIndexedKey[] IndexedKey { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]

indexed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#indexed_key BedrockagentcoreMemory#indexed_key}

---

##### `MemoryExecutionRoleArn`<sup>Optional</sup> <a name="MemoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn"></a>

```csharp
public string MemoryExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#region BedrockagentcoreMemory#region}

---

##### `StreamDeliveryResources`<sup>Optional</sup> <a name="StreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.streamDeliveryResources"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResources[] StreamDeliveryResources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]

stream_delivery_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources BedrockagentcoreMemory#stream_delivery_resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts"></a>

```csharp
public BedrockagentcoreMemoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#timeouts BedrockagentcoreMemory#timeouts}

---

### BedrockagentcoreMemoryIndexedKey <a name="BedrockagentcoreMemoryIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryIndexedKey {
    string Key,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}.

---

### BedrockagentcoreMemoryStreamDeliveryResources <a name="BedrockagentcoreMemoryStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResources {
    IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource[] Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.property.resource">Resource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]</code> | resource block. |

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.property.resource"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource[] Resource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#resource BedrockagentcoreMemory#resource}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResource <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResource {
    IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] Kinesis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.property.kinesis">Kinesis</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]</code> | kinesis block. |

---

##### `Kinesis`<sup>Optional</sup> <a name="Kinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.property.kinesis"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] Kinesis { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]

kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#kinesis BedrockagentcoreMemory#kinesis}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis {
    string DataStreamArn,
    IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] ContentConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.dataStreamArn">DataStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.contentConfiguration">ContentConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]</code> | content_configuration block. |

---

##### `DataStreamArn`<sup>Required</sup> <a name="DataStreamArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.dataStreamArn"></a>

```csharp
public string DataStreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}.

---

##### `ContentConfiguration`<sup>Optional</sup> <a name="ContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.contentConfiguration"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] ContentConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]

content_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#content_configuration BedrockagentcoreMemory#content_configuration}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration {
    string Type,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}.

---

### BedrockagentcoreMemoryTimeouts <a name="BedrockagentcoreMemoryTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#create BedrockagentcoreMemory#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/bedrockagentcore_memory#delete BedrockagentcoreMemory#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreMemoryIndexedKeyList <a name="BedrockagentcoreMemoryIndexedKeyList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryIndexedKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get"></a>

```csharp
private BedrockagentcoreMemoryIndexedKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryIndexedKey[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>[]

---


### BedrockagentcoreMemoryIndexedKeyOutputReference <a name="BedrockagentcoreMemoryIndexedKeyOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryIndexedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryIndexedKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get"></a>

```csharp
private BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>[]

---


### BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResource` <a name="PutResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource"></a>

```csharp
private void PutResource(IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]

---

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resource"></a>

```csharp
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceList Resource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceList</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resourceInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource[] ResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get"></a>

```csharp
private BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get"></a>

```csharp
private BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration">PutContentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resetContentConfiguration">ResetContentConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentConfiguration` <a name="PutContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration"></a>

```csharp
private void PutContentConfiguration(IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]

---

##### `ResetContentConfiguration` <a name="ResetContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resetContentConfiguration"></a>

```csharp
private void ResetContentConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfiguration">ContentConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfigurationInput">ContentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArnInput">DataStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArn">DataStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentConfiguration`<sup>Required</sup> <a name="ContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfiguration"></a>

```csharp
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList ContentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList</a>

---

##### `ContentConfigurationInput`<sup>Optional</sup> <a name="ContentConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] ContentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>[]

---

##### `DataStreamArnInput`<sup>Optional</sup> <a name="DataStreamArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArnInput"></a>

```csharp
public string DataStreamArnInput { get; }
```

- *Type:* string

---

##### `DataStreamArn`<sup>Required</sup> <a name="DataStreamArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArn"></a>

```csharp
public string DataStreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get"></a>

```csharp
private BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>[]

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis">PutKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resetKinesis">ResetKinesis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesis` <a name="PutKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis"></a>

```csharp
private void PutKinesis(IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]

---

##### `ResetKinesis` <a name="ResetKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resetKinesis"></a>

```csharp
private void ResetKinesis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesis">Kinesis</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesisInput">KinesisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kinesis`<sup>Required</sup> <a name="Kinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesis"></a>

```csharp
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList Kinesis { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList</a>

---

##### `KinesisInput`<sup>Optional</sup> <a name="KinesisInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesisInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] KinesisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>

---


### BedrockagentcoreMemoryTimeoutsOutputReference <a name="BedrockagentcoreMemoryTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreMemoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---



