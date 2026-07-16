# `directoryServiceRadiusSettings` Submodule <a name="`directoryServiceRadiusSettings` Submodule" id="@cdktn/provider-aws.directoryServiceRadiusSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRadiusSettings <a name="DirectoryServiceRadiusSettings" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings aws_directory_service_radius_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceRadiusSettings(Construct Scope, string Id, DirectoryServiceRadiusSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername">ResetUseSameUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(DirectoryServiceRadiusSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseSameUsername` <a name="ResetUseSameUsername" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername"></a>

```csharp
private void ResetUseSameUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceRadiusSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceRadiusSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceRadiusSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceRadiusSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryServiceRadiusSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectoryServiceRadiusSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryServiceRadiusSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryServiceRadiusSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceRadiusSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput">AuthenticationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput">DisplayLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput">RadiusPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput">RadiusRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput">RadiusServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput">RadiusTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput">SharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput">UseSameUsernameInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol">AuthenticationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel">DisplayLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort">RadiusPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries">RadiusRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers">RadiusServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout">RadiusTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername">UseSameUsername</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts"></a>

```csharp
public DirectoryServiceRadiusSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a>

---

##### `AuthenticationProtocolInput`<sup>Optional</sup> <a name="AuthenticationProtocolInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput"></a>

```csharp
public string AuthenticationProtocolInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DisplayLabelInput`<sup>Optional</sup> <a name="DisplayLabelInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput"></a>

```csharp
public string DisplayLabelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RadiusPortInput`<sup>Optional</sup> <a name="RadiusPortInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput"></a>

```csharp
public double RadiusPortInput { get; }
```

- *Type:* double

---

##### `RadiusRetriesInput`<sup>Optional</sup> <a name="RadiusRetriesInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput"></a>

```csharp
public double RadiusRetriesInput { get; }
```

- *Type:* double

---

##### `RadiusServersInput`<sup>Optional</sup> <a name="RadiusServersInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput"></a>

```csharp
public string[] RadiusServersInput { get; }
```

- *Type:* string[]

---

##### `RadiusTimeoutInput`<sup>Optional</sup> <a name="RadiusTimeoutInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput"></a>

```csharp
public double RadiusTimeoutInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput"></a>

```csharp
public string SharedSecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput"></a>

```csharp
public IResolvable|DirectoryServiceRadiusSettingsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

---

##### `UseSameUsernameInput`<sup>Optional</sup> <a name="UseSameUsernameInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput"></a>

```csharp
public bool|IResolvable UseSameUsernameInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthenticationProtocol`<sup>Required</sup> <a name="AuthenticationProtocol" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol"></a>

```csharp
public string AuthenticationProtocol { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DisplayLabel`<sup>Required</sup> <a name="DisplayLabel" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel"></a>

```csharp
public string DisplayLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RadiusPort`<sup>Required</sup> <a name="RadiusPort" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort"></a>

```csharp
public double RadiusPort { get; }
```

- *Type:* double

---

##### `RadiusRetries`<sup>Required</sup> <a name="RadiusRetries" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries"></a>

```csharp
public double RadiusRetries { get; }
```

- *Type:* double

---

##### `RadiusServers`<sup>Required</sup> <a name="RadiusServers" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers"></a>

```csharp
public string[] RadiusServers { get; }
```

- *Type:* string[]

---

##### `RadiusTimeout`<sup>Required</sup> <a name="RadiusTimeout" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout"></a>

```csharp
public double RadiusTimeout { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `UseSameUsername`<sup>Required</sup> <a name="UseSameUsername" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername"></a>

```csharp
public bool|IResolvable UseSameUsername { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRadiusSettingsConfig <a name="DirectoryServiceRadiusSettingsConfig" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceRadiusSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthenticationProtocol,
    string DirectoryId,
    string DisplayLabel,
    double RadiusPort,
    double RadiusRetries,
    string[] RadiusServers,
    double RadiusTimeout,
    string SharedSecret,
    string Id = null,
    string Region = null,
    DirectoryServiceRadiusSettingsTimeouts Timeouts = null,
    bool|IResolvable UseSameUsername = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol">AuthenticationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel">DisplayLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort">RadiusPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries">RadiusRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers">RadiusServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout">RadiusTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername">UseSameUsername</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationProtocol`<sup>Required</sup> <a name="AuthenticationProtocol" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol"></a>

```csharp
public string AuthenticationProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}.

---

##### `DisplayLabel`<sup>Required</sup> <a name="DisplayLabel" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel"></a>

```csharp
public string DisplayLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}.

---

##### `RadiusPort`<sup>Required</sup> <a name="RadiusPort" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort"></a>

```csharp
public double RadiusPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}.

---

##### `RadiusRetries`<sup>Required</sup> <a name="RadiusRetries" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries"></a>

```csharp
public double RadiusRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}.

---

##### `RadiusServers`<sup>Required</sup> <a name="RadiusServers" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers"></a>

```csharp
public string[] RadiusServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}.

---

##### `RadiusTimeout`<sup>Required</sup> <a name="RadiusTimeout" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout"></a>

```csharp
public double RadiusTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}.

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#region DirectoryServiceRadiusSettings#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts"></a>

```csharp
public DirectoryServiceRadiusSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}

---

##### `UseSameUsername`<sup>Optional</sup> <a name="UseSameUsername" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername"></a>

```csharp
public bool|IResolvable UseSameUsername { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}.

---

### DirectoryServiceRadiusSettingsTimeouts <a name="DirectoryServiceRadiusSettingsTimeouts" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceRadiusSettingsTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRadiusSettingsTimeoutsOutputReference <a name="DirectoryServiceRadiusSettingsTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryServiceRadiusSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryServiceRadiusSettingsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

---



