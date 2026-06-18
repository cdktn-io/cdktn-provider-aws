# `codeconnectionsHost` Submodule <a name="`codeconnectionsHost` Submodule" id="@cdktn/provider-aws.codeconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeconnectionsHost <a name="CodeconnectionsHost" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host aws_codeconnections_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHost(Construct Scope, string Id, CodeconnectionsHostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig">CodeconnectionsHostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig">CodeconnectionsHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts"></a>

```csharp
private void PutTimeouts(CodeconnectionsHostTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(IResolvable|CodeconnectionsHostVpcConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodeconnectionsHost resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeconnectionsHost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeconnectionsHost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeconnectionsHost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeconnectionsHost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodeconnectionsHost resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeconnectionsHost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeconnectionsHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodeconnectionsHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference">CodeconnectionsHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList">CodeconnectionsHostVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput">ProviderEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint">ProviderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeouts"></a>

```csharp
public CodeconnectionsHostTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference">CodeconnectionsHostTimeoutsOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration"></a>

```csharp
public CodeconnectionsHostVpcConfigurationList VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList">CodeconnectionsHostVpcConfigurationList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderEndpointInput`<sup>Optional</sup> <a name="ProviderEndpointInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput"></a>

```csharp
public string ProviderEndpointInput { get; }
```

- *Type:* string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeoutsInput"></a>

```csharp
public IResolvable|CodeconnectionsHostTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput"></a>

```csharp
public IResolvable|CodeconnectionsHostVpcConfiguration[] VpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderEndpoint`<sup>Required</sup> <a name="ProviderEndpoint" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint"></a>

```csharp
public string ProviderEndpoint { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeconnectionsHostConfig <a name="CodeconnectionsHostConfig" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ProviderEndpoint,
    string ProviderType,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CodeconnectionsHostTimeouts Timeouts = null,
    IResolvable|CodeconnectionsHostVpcConfiguration[] VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint">ProviderEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType">ProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]</code> | vpc_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}.

---

##### `ProviderEndpoint`<sup>Required</sup> <a name="ProviderEndpoint" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint"></a>

```csharp
public string ProviderEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}.

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#region CodeconnectionsHost#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.timeouts"></a>

```csharp
public CodeconnectionsHostTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#timeouts CodeconnectionsHost#timeouts}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration"></a>

```csharp
public IResolvable|CodeconnectionsHostVpcConfiguration[] VpcConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}

---

### CodeconnectionsHostTimeouts <a name="CodeconnectionsHostTimeouts" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#create CodeconnectionsHost#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#delete CodeconnectionsHost#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#update CodeconnectionsHost#update}

---

### CodeconnectionsHostVpcConfiguration <a name="CodeconnectionsHostVpcConfiguration" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostVpcConfiguration {
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string VpcId,
    string TlsCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate">TlsCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}.

---

##### `TlsCertificate`<sup>Optional</sup> <a name="TlsCertificate" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```csharp
public string TlsCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeconnectionsHostTimeoutsOutputReference <a name="CodeconnectionsHostTimeoutsOutputReference" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeconnectionsHostTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

---


### CodeconnectionsHostVpcConfigurationList <a name="CodeconnectionsHostVpcConfigurationList" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostVpcConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get"></a>

```csharp
private CodeconnectionsHostVpcConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|CodeconnectionsHostVpcConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>[]

---


### CodeconnectionsHostVpcConfigurationOutputReference <a name="CodeconnectionsHostVpcConfigurationOutputReference" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeconnectionsHostVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">ResetTlsCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTlsCertificate` <a name="ResetTlsCertificate" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```csharp
private void ResetTlsCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">TlsCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">TlsCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TlsCertificateInput`<sup>Optional</sup> <a name="TlsCertificateInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```csharp
public string TlsCertificateInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```csharp
public string TlsCertificate { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeconnectionsHostVpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>

---



