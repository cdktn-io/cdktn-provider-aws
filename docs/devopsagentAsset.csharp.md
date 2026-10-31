# `devopsagentAsset` Submodule <a name="`devopsagentAsset` Submodule" id="@cdktn/provider-aws.devopsagentAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAsset <a name="DevopsagentAsset" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset aws_devopsagent_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAsset(Construct Scope, string Id, DevopsagentAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig">DevopsagentAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig">DevopsagentAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent"></a>

```csharp
private void PutContent(IResolvable|DevopsagentAssetContent[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content">Content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual">MetadataActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput">AgentSpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput">ContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content"></a>

```csharp
public DevopsagentAssetContentList Content { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `MetadataActual`<sup>Required</sup> <a name="MetadataActual" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual"></a>

```csharp
public string MetadataActual { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AgentSpaceIdInput`<sup>Optional</sup> <a name="AgentSpaceIdInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput"></a>

```csharp
public string AgentSpaceIdInput { get; }
```

- *Type:* string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput"></a>

```csharp
public IResolvable|DevopsagentAssetContent[] ContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; }
```

- *Type:* string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetConfig <a name="DevopsagentAssetConfig" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentSpaceId,
    string AssetType,
    IResolvable|DevopsagentAssetContent[] Content = null,
    string Metadata = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType">AssetType</a></code> | <code>string</code> | Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content">Content</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata">Metadata</a></code> | <code>string</code> | JSON document describing the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; set; }
```

- *Type:* string

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content"></a>

```csharp
public IResolvable|DevopsagentAssetContent[] Content { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

JSON document describing the asset.

Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}

---

### DevopsagentAssetContent <a name="DevopsagentAssetContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContent {
    IResolvable|DevopsagentAssetContentFile[] File = null,
    IResolvable|DevopsagentAssetContentSourceUrl[] SourceUrl = null,
    IResolvable|DevopsagentAssetContentZip[] Zip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file">File</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]</code> | file block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl">SourceUrl</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]</code> | source_url block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip">Zip</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]</code> | zip block. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file"></a>

```csharp
public IResolvable|DevopsagentAssetContentFile[] File { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#file DevopsagentAsset#file}

---

##### `SourceUrl`<sup>Optional</sup> <a name="SourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl"></a>

```csharp
public IResolvable|DevopsagentAssetContentSourceUrl[] SourceUrl { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]

source_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#source_url DevopsagentAsset#source_url}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip"></a>

```csharp
public IResolvable|DevopsagentAssetContentZip[] Zip { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip DevopsagentAsset#zip}

---

### DevopsagentAssetContentFile <a name="DevopsagentAssetContentFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFile {
    string Path,
    IResolvable|DevopsagentAssetContentFileBody[] Body = null,
    string Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path">Path</a></code> | <code>string</code> | Path of the file within the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body">Body</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]</code> | body block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata">Metadata</a></code> | <code>string</code> | JSON metadata for the file. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the file within the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#path DevopsagentAsset#path}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body"></a>

```csharp
public IResolvable|DevopsagentAssetContentFileBody[] Body { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#body DevopsagentAsset#body}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

JSON metadata for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

### DevopsagentAssetContentFileBody <a name="DevopsagentAssetContentFileBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFileBody {
    string Bytes = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes">Bytes</a></code> | <code>string</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text">Text</a></code> | <code>string</code> | Text file content. |

---

##### `Bytes`<sup>Optional</sup> <a name="Bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes"></a>

```csharp
public string Bytes { get; set; }
```

- *Type:* string

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#bytes DevopsagentAsset#bytes}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#text DevopsagentAsset#text}

---

### DevopsagentAssetContentSourceUrl <a name="DevopsagentAssetContentSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentSourceUrl {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url">Url</a></code> | <code>string</code> | Source URL from which to import asset content. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Source URL from which to import asset content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#url DevopsagentAsset#url}

---

### DevopsagentAssetContentZip <a name="DevopsagentAssetContentZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentZip {
    string ZipFile
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile">ZipFile</a></code> | <code>string</code> | Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file. |

---

##### `ZipFile`<sup>Required</sup> <a name="ZipFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile"></a>

```csharp
public string ZipFile { get; set; }
```

- *Type:* string

Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip_file DevopsagentAsset#zip_file}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetContentFileBodyList <a name="DevopsagentAssetContentFileBodyList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFileBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get"></a>

```csharp
private DevopsagentAssetContentFileBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentFileBody[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]

---


### DevopsagentAssetContentFileBodyOutputReference <a name="DevopsagentAssetContentFileBodyOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFileBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes">ResetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytes` <a name="ResetBytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes"></a>

```csharp
private void ResetBytes()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput">BytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes">Bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BytesInput`<sup>Optional</sup> <a name="BytesInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput"></a>

```csharp
public string BytesInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes"></a>

```csharp
public string Bytes { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentFileBody InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>

---


### DevopsagentAssetContentFileList <a name="DevopsagentAssetContentFileList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get"></a>

```csharp
private DevopsagentAssetContentFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentFile[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]

---


### DevopsagentAssetContentFileOutputReference <a name="DevopsagentAssetContentFileOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody"></a>

```csharp
private void PutBody(IResolvable|DevopsagentAssetContentFileBody[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput">BodyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body"></a>

```csharp
public DevopsagentAssetContentFileBodyList Body { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput"></a>

```csharp
public IResolvable|DevopsagentAssetContentFileBody[] BodyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentFile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>

---


### DevopsagentAssetContentList <a name="DevopsagentAssetContentList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get"></a>

```csharp
private DevopsagentAssetContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContent[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>[]

---


### DevopsagentAssetContentOutputReference <a name="DevopsagentAssetContentOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl">PutSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl">ResetSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile"></a>

```csharp
private void PutFile(IResolvable|DevopsagentAssetContentFile[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]

---

##### `PutSourceUrl` <a name="PutSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl"></a>

```csharp
private void PutSourceUrl(IResolvable|DevopsagentAssetContentSourceUrl[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]

---

##### `PutZip` <a name="PutZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip"></a>

```csharp
private void PutZip(IResolvable|DevopsagentAssetContentZip[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]

---

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetSourceUrl` <a name="ResetSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl"></a>

```csharp
private void ResetSourceUrl()
```

##### `ResetZip` <a name="ResetZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip"></a>

```csharp
private void ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl">SourceUrl</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput">FileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput">ZipInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file"></a>

```csharp
public DevopsagentAssetContentFileList File { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a>

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl"></a>

```csharp
public DevopsagentAssetContentSourceUrlList SourceUrl { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip"></a>

```csharp
public DevopsagentAssetContentZipList Zip { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput"></a>

```csharp
public IResolvable|DevopsagentAssetContentFile[] FileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>[]

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput"></a>

```csharp
public IResolvable|DevopsagentAssetContentSourceUrl[] SourceUrlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput"></a>

```csharp
public IResolvable|DevopsagentAssetContentZip[] ZipInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>

---


### DevopsagentAssetContentSourceUrlList <a name="DevopsagentAssetContentSourceUrlList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentSourceUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get"></a>

```csharp
private DevopsagentAssetContentSourceUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentSourceUrl[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>[]

---


### DevopsagentAssetContentSourceUrlOutputReference <a name="DevopsagentAssetContentSourceUrlOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentSourceUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentSourceUrl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>

---


### DevopsagentAssetContentZipList <a name="DevopsagentAssetContentZipList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentZipList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get"></a>

```csharp
private DevopsagentAssetContentZipOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentZip[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>[]

---


### DevopsagentAssetContentZipOutputReference <a name="DevopsagentAssetContentZipOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAssetContentZipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput">ZipFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile">ZipFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ZipFileInput`<sup>Optional</sup> <a name="ZipFileInput" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput"></a>

```csharp
public string ZipFileInput { get; }
```

- *Type:* string

---

##### `ZipFile`<sup>Required</sup> <a name="ZipFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile"></a>

```csharp
public string ZipFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssetContentZip InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>

---



