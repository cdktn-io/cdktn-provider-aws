# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-aws.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider aws_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProvider(Construct Scope, string Id, DmsDataProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual">ResetVirtual</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings"></a>

```csharp
private void PutSettings(IResolvable|DmsDataProviderSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVirtual` <a name="ResetVirtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual"></a>

```csharp
private void ResetVirtual()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsDataProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsDataProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsDataProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsDataProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput">VirtualInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual">Virtual</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings"></a>

```csharp
public DmsDataProviderSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettings[] SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualInput`<sup>Optional</sup> <a name="VirtualInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput"></a>

```csharp
public bool|IResolvable VirtualInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Virtual`<sup>Required</sup> <a name="Virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual"></a>

```csharp
public bool|IResolvable Virtual { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Engine,
    string Description = null,
    string Name = null,
    string Region = null,
    IResolvable|DmsDataProviderSettings[] Settings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    bool|IResolvable Virtual = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings">Settings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual">Virtual</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```csharp
public IResolvable|DmsDataProviderSettings[] Settings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `Virtual`<sup>Optional</sup> <a name="Virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual"></a>

```csharp
public bool|IResolvable Virtual { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettings {
    IResolvable|DmsDataProviderSettingsDocDbSettings[] DocDbSettings = null,
    IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings[] IbmDb2LuwSettings = null,
    IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings[] IbmDb2ZosSettings = null,
    IResolvable|DmsDataProviderSettingsMariaDbSettings[] MariaDbSettings = null,
    IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings[] MicrosoftSqlServerSettings = null,
    IResolvable|DmsDataProviderSettingsMongoDbSettings[] MongoDbSettings = null,
    IResolvable|DmsDataProviderSettingsMysqlSettings[] MysqlSettings = null,
    IResolvable|DmsDataProviderSettingsOracleSettings[] OracleSettings = null,
    IResolvable|DmsDataProviderSettingsPostgresqlSettings[] PostgresqlSettings = null,
    IResolvable|DmsDataProviderSettingsRedshiftSettings[] RedshiftSettings = null,
    IResolvable|DmsDataProviderSettingsSybaseAseSettings[] SybaseAseSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">DocDbSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | doc_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | ibm_db2_luw_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings">IbmDb2ZosSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | ibm_db2_zos_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">MariaDbSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | maria_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | microsoft_sql_server_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">MongoDbSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | mongo_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings">MysqlSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">OracleSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings">PostgresqlSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | postgresql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">RedshiftSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | sybase_ase_settings block. |

---

##### `DocDbSettings`<sup>Optional</sup> <a name="DocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsDocDbSettings[] DocDbSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

doc_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `IbmDb2LuwSettings`<sup>Optional</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings[] IbmDb2LuwSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

ibm_db2_luw_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}

---

##### `IbmDb2ZosSettings`<sup>Optional</sup> <a name="IbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings[] IbmDb2ZosSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

ibm_db2_zos_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}

---

##### `MariaDbSettings`<sup>Optional</sup> <a name="MariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMariaDbSettings[] MariaDbSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

maria_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `MicrosoftSqlServerSettings`<sup>Optional</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings[] MicrosoftSqlServerSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

microsoft_sql_server_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `MongoDbSettings`<sup>Optional</sup> <a name="MongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMongoDbSettings[] MongoDbSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

mongo_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `MysqlSettings`<sup>Optional</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMysqlSettings[] MysqlSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsOracleSettings[] OracleSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `PostgresqlSettings`<sup>Optional</sup> <a name="PostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsPostgresqlSettings[] PostgresqlSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

postgresql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsRedshiftSettings[] RedshiftSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `SybaseAseSettings`<sup>Optional</sup> <a name="SybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```csharp
public IResolvable|DmsDataProviderSettingsSybaseAseSettings[] SybaseAseSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

sybase_ase_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsDocDbSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2LuwSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    double EncryptionAlgorithm = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    double SecurityMechanism = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism">SecurityMechanism</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm"></a>

```csharp
public double EncryptionAlgorithm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `SecurityMechanism`<sup>Optional</sup> <a name="SecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism"></a>

```csharp
public double SecurityMechanism { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZosSettings <a name="DmsDataProviderSettingsIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2ZosSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMariaDbSettings {
    string CertificateArn = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMicrosoftSqlServerSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMongoDbSettings {
    string AuthMechanism = null,
    string AuthSource = null,
    string AuthType = null,
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">AuthSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```csharp
public string AuthSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMysqlSettings <a name="DmsDataProviderSettingsMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMysqlSettings {
    string CertificateArn = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsOracleSettings {
    string AsmServer = null,
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string SecretsManagerOracleAsmAccessRoleArn = null,
    string SecretsManagerOracleAsmSecretId = null,
    string SecretsManagerSecurityDbEncryptionAccessRoleArn = null,
    string SecretsManagerSecurityDbEncryptionSecretId = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">AsmServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```csharp
public string AsmServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgresqlSettings <a name="DmsDataProviderSettingsPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsPostgresqlSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsRedshiftSettings {
    string DatabaseName = null,
    double Port = null,
    string S3AccessRoleArn = null,
    string S3Path = null,
    string ServerName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path">S3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path"></a>

```csharp
public string S3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsSybaseAseSettings {
    string CertificateArn = null,
    string DatabaseName = null,
    bool|IResolvable EncryptPassword = null,
    double Port = null,
    string ServerName = null,
    string SslMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">EncryptPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `EncryptPassword`<sup>Optional</sup> <a name="EncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```csharp
public bool|IResolvable EncryptPassword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsList <a name="DmsDataProviderSettingsDocDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsDocDbSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsDocDbSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsDocDbSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---


### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsDocDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsDocDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsList <a name="DmsDataProviderSettingsIbmDb2LuwSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2LuwSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism">ResetSecurityMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetSecurityMechanism` <a name="ResetSecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism"></a>

```csharp
private void ResetSecurityMechanism()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput">SecurityMechanismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism">SecurityMechanism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public double EncryptionAlgorithmInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `SecurityMechanismInput`<sup>Optional</sup> <a name="SecurityMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput"></a>

```csharp
public double SecurityMechanismInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm"></a>

```csharp
public double EncryptionAlgorithm { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `SecurityMechanism`<sup>Required</sup> <a name="SecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism"></a>

```csharp
public double SecurityMechanism { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DmsDataProviderSettingsIbmDb2ZosSettingsList <a name="DmsDataProviderSettingsIbmDb2ZosSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2ZosSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---


### DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>

---


### DmsDataProviderSettingsList <a name="DmsDataProviderSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---


### DmsDataProviderSettingsMariaDbSettingsList <a name="DmsDataProviderSettingsMariaDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMariaDbSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsMariaDbSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMariaDbSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMariaDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMariaDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsList <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMicrosoftSqlServerSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DmsDataProviderSettingsMongoDbSettingsList <a name="DmsDataProviderSettingsMongoDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMongoDbSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsMongoDbSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMongoDbSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMongoDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```csharp
private void ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```csharp
private void ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```csharp
public string AuthMechanismInput { get; }
```

- *Type:* string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```csharp
public string AuthSourceInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMongoDbSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---


### DmsDataProviderSettingsMysqlSettingsList <a name="DmsDataProviderSettingsMysqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMysqlSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsMysqlSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMysqlSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---


### DmsDataProviderSettingsMysqlSettingsOutputReference <a name="DmsDataProviderSettingsMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsMysqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMysqlSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>

---


### DmsDataProviderSettingsOracleSettingsList <a name="DmsDataProviderSettingsOracleSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsOracleSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsOracleSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsOracleSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsOracleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">ResetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">ResetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">ResetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">ResetSecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">ResetSecretsManagerSecurityDbEncryptionSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```csharp
private void ResetAsmServer()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```csharp
private void ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecretsManagerSecurityDbEncryptionAccessRoleArn` <a name="ResetSecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerSecurityDbEncryptionAccessRoleArn()
```

##### `ResetSecretsManagerSecurityDbEncryptionSecretId` <a name="ResetSecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```csharp
private void ResetSecretsManagerSecurityDbEncryptionSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">SecretsManagerSecurityDbEncryptionAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">SecretsManagerSecurityDbEncryptionSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```csharp
public string AsmServerInput { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```csharp
public string SecretsManagerOracleAsmSecretIdInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecurityDbEncryptionSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionSecretIdInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```csharp
public string AsmServer { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; }
```

- *Type:* string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```csharp
public string SecretsManagerSecurityDbEncryptionSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsOracleSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">PutDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">PutIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings">PutIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">PutMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">PutMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">PutMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings">PutMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">PutOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings">PutPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">PutSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">ResetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">ResetIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings">ResetIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">ResetMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">ResetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">ResetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings">ResetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">ResetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings">ResetPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">ResetSybaseAseSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocDbSettings` <a name="PutDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```csharp
private void PutDocDbSettings(IResolvable|DmsDataProviderSettingsDocDbSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---

##### `PutIbmDb2LuwSettings` <a name="PutIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```csharp
private void PutIbmDb2LuwSettings(IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---

##### `PutIbmDb2ZosSettings` <a name="PutIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings"></a>

```csharp
private void PutIbmDb2ZosSettings(IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---

##### `PutMariaDbSettings` <a name="PutMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```csharp
private void PutMariaDbSettings(IResolvable|DmsDataProviderSettingsMariaDbSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---

##### `PutMicrosoftSqlServerSettings` <a name="PutMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```csharp
private void PutMicrosoftSqlServerSettings(IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---

##### `PutMongoDbSettings` <a name="PutMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```csharp
private void PutMongoDbSettings(IResolvable|DmsDataProviderSettingsMongoDbSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---

##### `PutMysqlSettings` <a name="PutMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings"></a>

```csharp
private void PutMysqlSettings(IResolvable|DmsDataProviderSettingsMysqlSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```csharp
private void PutOracleSettings(IResolvable|DmsDataProviderSettingsOracleSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---

##### `PutPostgresqlSettings` <a name="PutPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings"></a>

```csharp
private void PutPostgresqlSettings(IResolvable|DmsDataProviderSettingsPostgresqlSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```csharp
private void PutRedshiftSettings(IResolvable|DmsDataProviderSettingsRedshiftSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---

##### `PutSybaseAseSettings` <a name="PutSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```csharp
private void PutSybaseAseSettings(IResolvable|DmsDataProviderSettingsSybaseAseSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---

##### `ResetDocDbSettings` <a name="ResetDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```csharp
private void ResetDocDbSettings()
```

##### `ResetIbmDb2LuwSettings` <a name="ResetIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```csharp
private void ResetIbmDb2LuwSettings()
```

##### `ResetIbmDb2ZosSettings` <a name="ResetIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings"></a>

```csharp
private void ResetIbmDb2ZosSettings()
```

##### `ResetMariaDbSettings` <a name="ResetMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```csharp
private void ResetMariaDbSettings()
```

##### `ResetMicrosoftSqlServerSettings` <a name="ResetMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```csharp
private void ResetMicrosoftSqlServerSettings()
```

##### `ResetMongoDbSettings` <a name="ResetMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```csharp
private void ResetMongoDbSettings()
```

##### `ResetMysqlSettings` <a name="ResetMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings"></a>

```csharp
private void ResetMysqlSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```csharp
private void ResetOracleSettings()
```

##### `ResetPostgresqlSettings` <a name="ResetPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings"></a>

```csharp
private void ResetPostgresqlSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```csharp
private void ResetRedshiftSettings()
```

##### `ResetSybaseAseSettings` <a name="ResetSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```csharp
private void ResetSybaseAseSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings">IbmDb2ZosSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">MariaDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings">MysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings">PostgresqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">DocDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">IbmDb2LuwSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput">IbmDb2ZosSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">MariaDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">MicrosoftSqlServerSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">MongoDbSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput">MysqlSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput">PostgresqlSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">SybaseAseSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```csharp
public DmsDataProviderSettingsDocDbSettingsList DocDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a>

---

##### `IbmDb2LuwSettings`<sup>Required</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```csharp
public DmsDataProviderSettingsIbmDb2LuwSettingsList IbmDb2LuwSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a>

---

##### `IbmDb2ZosSettings`<sup>Required</sup> <a name="IbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings"></a>

```csharp
public DmsDataProviderSettingsIbmDb2ZosSettingsList IbmDb2ZosSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a>

---

##### `MariaDbSettings`<sup>Required</sup> <a name="MariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```csharp
public DmsDataProviderSettingsMariaDbSettingsList MariaDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a>

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```csharp
public DmsDataProviderSettingsMicrosoftSqlServerSettingsList MicrosoftSqlServerSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```csharp
public DmsDataProviderSettingsMongoDbSettingsList MongoDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a>

---

##### `MysqlSettings`<sup>Required</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings"></a>

```csharp
public DmsDataProviderSettingsMysqlSettingsList MysqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```csharp
public DmsDataProviderSettingsOracleSettingsList OracleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a>

---

##### `PostgresqlSettings`<sup>Required</sup> <a name="PostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings"></a>

```csharp
public DmsDataProviderSettingsPostgresqlSettingsList PostgresqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```csharp
public DmsDataProviderSettingsRedshiftSettingsList RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a>

---

##### `SybaseAseSettings`<sup>Required</sup> <a name="SybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```csharp
public DmsDataProviderSettingsSybaseAseSettingsList SybaseAseSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a>

---

##### `DocDbSettingsInput`<sup>Optional</sup> <a name="DocDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsDocDbSettings[] DocDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---

##### `IbmDb2LuwSettingsInput`<sup>Optional</sup> <a name="IbmDb2LuwSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2LuwSettings[] IbmDb2LuwSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---

##### `IbmDb2ZosSettingsInput`<sup>Optional</sup> <a name="IbmDb2ZosSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsIbmDb2ZosSettings[] IbmDb2ZosSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---

##### `MariaDbSettingsInput`<sup>Optional</sup> <a name="MariaDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMariaDbSettings[] MariaDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---

##### `MicrosoftSqlServerSettingsInput`<sup>Optional</sup> <a name="MicrosoftSqlServerSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMicrosoftSqlServerSettings[] MicrosoftSqlServerSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---

##### `MongoDbSettingsInput`<sup>Optional</sup> <a name="MongoDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMongoDbSettings[] MongoDbSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---

##### `MysqlSettingsInput`<sup>Optional</sup> <a name="MysqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsMysqlSettings[] MysqlSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsOracleSettings[] OracleSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---

##### `PostgresqlSettingsInput`<sup>Optional</sup> <a name="PostgresqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsPostgresqlSettings[] PostgresqlSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsRedshiftSettings[] RedshiftSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---

##### `SybaseAseSettingsInput`<sup>Optional</sup> <a name="SybaseAseSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```csharp
public IResolvable|DmsDataProviderSettingsSybaseAseSettings[] SybaseAseSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---


### DmsDataProviderSettingsPostgresqlSettingsList <a name="DmsDataProviderSettingsPostgresqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsPostgresqlSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsPostgresqlSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsPostgresqlSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---


### DmsDataProviderSettingsPostgresqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgresqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsPostgresqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsPostgresqlSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>

---


### DmsDataProviderSettingsRedshiftSettingsList <a name="DmsDataProviderSettingsRedshiftSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsRedshiftSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsRedshiftSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsRedshiftSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn"></a>

```csharp
private void ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path"></a>

```csharp
private void ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```csharp
public string S3AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput"></a>

```csharp
public string S3PathInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn"></a>

```csharp
public string S3AccessRoleArn { get; }
```

- *Type:* string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path"></a>

```csharp
public string S3Path { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsRedshiftSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---


### DmsDataProviderSettingsSybaseAseSettingsList <a name="DmsDataProviderSettingsSybaseAseSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsSybaseAseSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get"></a>

```csharp
private DmsDataProviderSettingsSybaseAseSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsSybaseAseSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsDataProviderSettingsSybaseAseSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">ResetEncryptPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetEncryptPassword` <a name="ResetEncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```csharp
private void ResetEncryptPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```csharp
private void ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">EncryptPasswordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">EncryptPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EncryptPasswordInput`<sup>Optional</sup> <a name="EncryptPasswordInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```csharp
public bool|IResolvable EncryptPasswordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EncryptPassword`<sup>Required</sup> <a name="EncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```csharp
public bool|IResolvable EncryptPassword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataProviderSettingsSybaseAseSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---



