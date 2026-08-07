# `datasyncLocationSmb` Submodule <a name="`datasyncLocationSmb` Submodule" id="@cdktn/provider-aws.datasyncLocationSmb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationSmb <a name="DatasyncLocationSmb" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb aws_datasync_location_smb}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationSmb(Construct Scope, string Id, DatasyncLocationSmbConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions"></a>

```csharp
private void PutMountOptions(DatasyncLocationSmbMountOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationSmb.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationSmb.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationSmb.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationSmb.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationSmb to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationSmb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationSmb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput">AgentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput">ServerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns">AgentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname">ServerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions"></a>

```csharp
public DatasyncLocationSmbMountOptionsOutputReference MountOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput"></a>

```csharp
public string[] AgentArnsInput { get; }
```

- *Type:* string[]

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput"></a>

```csharp
public DatasyncLocationSmbMountOptions MountOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerHostnameInput`<sup>Optional</sup> <a name="ServerHostnameInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput"></a>

```csharp
public string ServerHostnameInput { get; }
```

- *Type:* string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns"></a>

```csharp
public string[] AgentArns { get; }
```

- *Type:* string[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname"></a>

```csharp
public string ServerHostname { get; }
```

- *Type:* string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationSmbConfig <a name="DatasyncLocationSmbConfig" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationSmbConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AgentArns,
    string Password,
    string ServerHostname,
    string Subdirectory,
    string User,
    string Domain = null,
    string Id = null,
    DatasyncLocationSmbMountOptions MountOptions = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns">AgentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname">ServerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns"></a>

```csharp
public string[] AgentArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}.

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname"></a>

```csharp
public string ServerHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}.

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions"></a>

```csharp
public DatasyncLocationSmbMountOptions MountOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#region DatasyncLocationSmb#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}.

---

### DatasyncLocationSmbMountOptions <a name="DatasyncLocationSmbMountOptions" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationSmbMountOptions {
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}. |

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationSmbMountOptionsOutputReference <a name="DatasyncLocationSmbMountOptionsOutputReference" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationSmbMountOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationSmbMountOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---



