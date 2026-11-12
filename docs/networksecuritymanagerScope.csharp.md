# `networksecuritymanagerScope` Submodule <a name="`networksecuritymanagerScope` Submodule" id="@cdktn/provider-aws.networksecuritymanagerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerScope <a name="NetworksecuritymanagerScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope aws_networksecuritymanager_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScope(Construct Scope, string Id, NetworksecuritymanagerScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration">PutScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished">ResetIsPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration">ResetScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopeConfiguration` <a name="PutScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration"></a>

```csharp
private void PutScopeConfiguration(IResolvable|NetworksecuritymanagerScopeScopeConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIsPublished` <a name="ResetIsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished"></a>

```csharp
private void ResetIsPublished()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScopeConfiguration` <a name="ResetScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration"></a>

```csharp
private void ResetScopeConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput">IsPublishedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput">ScopeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished">IsPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationList ScopeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IsPublishedInput`<sup>Optional</sup> <a name="IsPublishedInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput"></a>

```csharp
public bool|IResolvable IsPublishedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScopeConfigurationInput`<sup>Optional</sup> <a name="ScopeConfigurationInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfiguration[] ScopeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsPublished`<sup>Required</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished"></a>

```csharp
public bool|IResolvable IsPublished { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerScopeConfig <a name="NetworksecuritymanagerScopeConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    bool|IResolvable IsPublished = null,
    string Region = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfiguration[] ScopeConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished">IsPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration">ScopeConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | scope_configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}.

---

##### `IsPublished`<sup>Optional</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished"></a>

```csharp
public bool|IResolvable IsPublished { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#region NetworksecuritymanagerScope#region}

---

##### `ScopeConfiguration`<sup>Optional</sup> <a name="ScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfiguration[] ScopeConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfiguration <a name="NetworksecuritymanagerScopeScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfiguration {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] AccountFilter = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope[] ResourceScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter">AccountFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | account_filter block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope">ResourceScope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | resource_scope block. |

---

##### `AccountFilter`<sup>Optional</sup> <a name="AccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] AccountFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

account_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_filter NetworksecuritymanagerScope#account_filter}

---

##### `ResourceScope`<sup>Optional</sup> <a name="ResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope[] ResourceScope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

resource_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_scope NetworksecuritymanagerScope#resource_scope}

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilter <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilter {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] Exclude = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] Include = null,
    bool|IResolvable IncludeAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude">Exclude</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include">Include</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] Exclude { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] Include { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude {
    string[] AccountIds = null,
    string[] OrganizationalUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds">AccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude {
    string[] AccountIds = null,
    string[] OrganizationalUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds">AccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScope <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScope {
    string ResourceType,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] Exclude = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] Include = null,
    bool|IResolvable IncludeAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude">Exclude</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include">Include</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] Exclude { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] Include { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude {
    string[] ExplicitArns = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns">ExplicitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression">Expression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | expression block. |

---

##### `ExplicitArns`<sup>Optional</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns"></a>

```csharp
public string[] ExplicitArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] Expression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] And = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] Criteria = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] Not = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] Or = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and">And</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria">Criteria</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not">Not</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or">Or</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | or block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] And { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] Criteria { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] Not { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] Or { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude {
    string[] ExplicitArns = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns">ExplicitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression">Expression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | expression block. |

---

##### `ExplicitArns`<sup>Optional</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns"></a>

```csharp
public string[] ExplicitArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] Expression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] And = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] Criteria = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] Not = null,
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] Or = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and">And</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria">Criteria</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not">Not</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or">Or</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | or block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] And { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] Criteria { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] Not { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] Or { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr {
    IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] AlbConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig">AlbConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] AlbConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig {
    string IpAddressType = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclude` <a name="PutExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude"></a>

```csharp
private void PutExclude(IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---

##### `PutInclude` <a name="PutInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude"></a>

```csharp
private void PutInclude(IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll"></a>

```csharp
private void ResetIncludeAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList Include { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a>

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] ExcludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput"></a>

```csharp
public bool|IResolvable IncludeAllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] IncludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>

---


### NetworksecuritymanagerScopeScopeConfigurationList <a name="NetworksecuritymanagerScopeScopeConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter">PutAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope">PutResourceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter">ResetAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope">ResetResourceScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccountFilter` <a name="PutAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter"></a>

```csharp
private void PutAccountFilter(IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---

##### `PutResourceScope` <a name="PutResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope"></a>

```csharp
private void PutResourceScope(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---

##### `ResetAccountFilter` <a name="ResetAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter"></a>

```csharp
private void ResetAccountFilter()
```

##### `ResetResourceScope` <a name="ResetResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope"></a>

```csharp
private void ResetResourceScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter">AccountFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope">ResourceScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput">AccountFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput">ResourceScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountFilter`<sup>Required</sup> <a name="AccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationAccountFilterList AccountFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a>

---

##### `ResourceScope`<sup>Required</sup> <a name="ResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeList ResourceScope { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a>

---

##### `AccountFilterInput`<sup>Optional</sup> <a name="AccountFilterInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] AccountFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---

##### `ResourceScopeInput`<sup>Optional</sup> <a name="ResourceScopeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope[] ResourceScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr">ResetOr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd"></a>

```csharp
private void PutAnd(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---

##### `PutNot` <a name="PutNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot"></a>

```csharp
private void PutNot(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr"></a>

```csharp
private void PutOr(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd"></a>

```csharp
private void ResetAnd()
```

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria"></a>

```csharp
private void ResetCriteria()
```

##### `ResetNot` <a name="ResetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot"></a>

```csharp
private void ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr"></a>

```csharp
private void ResetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput">AndInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput">NotInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput">OrInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList And { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList Not { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList Or { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] AndInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] NotInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] OrInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns">ResetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression"></a>

```csharp
private void PutExpression(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---

##### `ResetExplicitArns` <a name="ResetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns"></a>

```csharp
private void ResetExplicitArns()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput">ExplicitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns">ExplicitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a>

---

##### `ExplicitArnsInput`<sup>Optional</sup> <a name="ExplicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput"></a>

```csharp
public string[] ExplicitArnsInput { get; }
```

- *Type:* string[]

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---

##### `ExplicitArns`<sup>Required</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns"></a>

```csharp
public string[] ExplicitArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig"></a>

```csharp
private void PutAlbConfig(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig"></a>

```csharp
private void ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList AlbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] AlbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr">ResetOr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd"></a>

```csharp
private void PutAnd(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---

##### `PutNot` <a name="PutNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot"></a>

```csharp
private void PutNot(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr"></a>

```csharp
private void PutOr(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd"></a>

```csharp
private void ResetAnd()
```

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria"></a>

```csharp
private void ResetCriteria()
```

##### `ResetNot` <a name="ResetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot"></a>

```csharp
private void ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr"></a>

```csharp
private void ResetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput">AndInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput">NotInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput">OrInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList And { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList Not { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList Or { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] AndInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] NotInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] OrInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns">ResetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression"></a>

```csharp
private void PutExpression(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---

##### `ResetExplicitArns` <a name="ResetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns"></a>

```csharp
private void ResetExplicitArns()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput">ExplicitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns">ExplicitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a>

---

##### `ExplicitArnsInput`<sup>Optional</sup> <a name="ExplicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput"></a>

```csharp
public string[] ExplicitArnsInput { get; }
```

- *Type:* string[]

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---

##### `ExplicitArns`<sup>Required</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns"></a>

```csharp
public string[] ExplicitArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get"></a>

```csharp
private NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclude` <a name="PutExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude"></a>

```csharp
private void PutExclude(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---

##### `PutInclude` <a name="PutInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude"></a>

```csharp
private void PutInclude(IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll"></a>

```csharp
private void ResetIncludeAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput">IncludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll">IncludeAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include"></a>

```csharp
public NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList Include { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a>

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] ExcludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput"></a>

```csharp
public bool|IResolvable IncludeAllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] IncludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll"></a>

```csharp
public bool|IResolvable IncludeAll { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerScopeScopeConfigurationResourceScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>

---



